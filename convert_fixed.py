import os
import glob
import re

html_dir = 'stitch_screens'
jsx_dir = 'frontend/src/pages'

def html_to_jsx(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract body content
    match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if match:
        html = match.group(1)

    # Remove script and style tags
    html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
    
    # Fix self-closing tags
    html = re.sub(r'(<(img|input|hr|br|path|circle|source)[^>]*?)(?<!/)>', r'\1/>', html)
    
    # Simple attribute conversions
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('checked=""', 'defaultChecked')
    html = html.replace('checked', 'defaultChecked')
    
    # Convert SVG inline styles and unsupported attributes if needed
    # (Just a basic replace for the common ones we see)
    html = html.replace('style="font-variation-settings: \'FILL\' 1;"', 'style={{ fontVariationSettings: "\'FILL\' 1" }}')
    
    # Convert HTML comments to JSX comments
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)

    return f"import React from 'react';\nimport {{ Link }} from 'react-router-dom';\n\nexport default function COMPONENT_NAME() {{\n  return (\n    <>\n      {html.strip()}\n    </>\n  );\n}}\n"

# Process all HTML files
for file_path in glob.glob(os.path.join(html_dir, '*.html')):
    basename = os.path.basename(file_path).replace('.html', '')
    component_name = ''.join(word.capitalize() for word in basename.split(' '))
    component_name = component_name.replace('-', '')
    
    jsx_path = os.path.join(jsx_dir, f"{component_name}.jsx")
    
    # Do not overwrite AiAgentChat.jsx as we already customized it!
    if "AiAgentChat" in component_name or "EnhancedLandingPageV2" in component_name or "HomeDashboard" in component_name or "DailyLog" in component_name:
         # Skip components we already consider 'good' or actively modified
         continue
         
    jsx_content = html_to_jsx(file_path)
    jsx_content = jsx_content.replace('COMPONENT_NAME', component_name)
    
    with open(jsx_path, 'w', encoding='utf-8') as f:
        f.write(jsx_content)

print("Conversion complete.")
