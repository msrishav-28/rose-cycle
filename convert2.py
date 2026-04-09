import os
import re
import glob

html_files = glob.glob('stitch_screens/*.html')

app_imports = []
app_routes = []

def html_to_jsx(html):
    # Strip <script> tags and their content
    html = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', html, flags=re.IGNORECASE)

    # Basic naive conversion
    html = html.replace('class=', 'className=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    # Self-closing tags fixing properly
    # 1. first change `<img ... >` to `<img ... />`
    html = re.sub(r'(<(img|input|hr|br|path|circle|source)[^>]*?)(?<!/)>', r'\1/>', html)
    # 2. remove dangling `</img>`, `</path>`, etc.
    html = re.sub(r'</(img|input|hr|br|path|circle|source)>', '', html)
    
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    
    # Extract only the body content
    match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if match:
        body_content = match.group(1)
        return body_content.strip()
    return html.strip()

for file in html_files:
    filename = os.path.basename(file).replace('.html', '')
    comp_name = "".join([w.capitalize() for w in re.sub(r'[^a-zA-Z0-9]+', ' ', filename).split()])
    route_name = filename.lower().replace(' ', '-').replace('--', '-')
    
    with open(file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    jsx_content = html_to_jsx(html_content)
    
    # In some screens, there might be style tags inside inline styles, replace style="..." with a compatible or remove them.
    # For now, let's just make sure it parses as JSX
    # We will replace style="..." with a harmless className for now, or just remove style strings if too complex.
    # A safe bet: remove `style="font-variation-settings: 'FILL' 1;"`
    jsx_content = re.sub(r'style="[^"]*"', '', jsx_content)

    component_code = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

export default function {comp_name}() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    component_code = component_code.replace('<a ', '<Link ').replace('</a>', '</Link>')
    component_code = component_code.replace('href="#"', 'to="#"')
    
    with open(f'frontend/src/pages/{comp_name}.jsx', 'w', encoding='utf-8') as f:
        f.write(component_code)
