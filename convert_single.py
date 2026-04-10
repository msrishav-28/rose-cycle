import os
import re

def html_to_jsx(html):
    html = re.sub(r'<(script|style)\b[^<]*(?:(?!<\/\1>)<[^<]*)*<\/\1>', '', html, flags=re.IGNORECASE)
    html = html.replace('class=', 'className=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    html = html.replace('stroke-dasharray=', 'strokeDasharray=')
    html = html.replace('stroke-dashoffset=', 'strokeDashoffset=')
    html = re.sub(r'style="[^"]*"', '', html)
    html = re.sub(r'(<(img|input|hr|br|path|circle|source)[^>]*?)(?<!/)>', r'\1/>', html)
    html = re.sub(r'</(img|input|hr|br|path|circle|source)>', '', html)
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return html.strip()

file = 'stitch_screens/Enhanced Landing Page v2.html'
filename = os.path.basename(file).replace('.html', '')
comp_name = "".join([w.capitalize() for w in re.sub(r'[^a-zA-Z0-9]+', ' ', filename).split()])

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
print(f'Converted {comp_name}.jsx')
