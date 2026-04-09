import os
import re
import glob

html_files = glob.glob('stitch_screens/*.html')

app_imports = []
app_routes = []

def html_to_jsx(html):
    # Strip <script> and <style> tags and their content
    html = re.sub(r'<(script|style)\b[^<]*(?:(?!<\/\1>)<[^<]*)*<\/\1>', '', html, flags=re.IGNORECASE)

    # Basic naive conversion
    html = html.replace('class=', 'className=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    
    # SVG specific attribute casing
    html = html.replace('stroke-dasharray=', 'strokeDasharray=')
    html = html.replace('stroke-dashoffset=', 'strokeDashoffset=')
    
    # Inline style="xyz: abc;" to style={{}} is too complex for basic regex, so remove them all since Tailwind is mostly used.
    html = re.sub(r'style="[^"]*"', '', html)

    # Self-closing tags fixing properly
    html = re.sub(r'(<(img|input|hr|br|path|circle|source)[^>]*?)(?<!/)>', r'\1/>', html)
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
