import os
import re
import glob

html_files = glob.glob('stitch_screens/*.html')

os.makedirs('frontend/src/pages', exist_ok=True)
os.makedirs('frontend/src/components', exist_ok=True)

app_imports = []
app_routes = []

def html_to_jsx(html):
    # Basic naive conversion
    html = html.replace('class=', 'className=')
    html = html.replace('viewbox=', 'viewBox=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    # Self-closing tags fixing (simple regex, not perfectly robust but should suffice for well-formed stitch HTML)
    html = re.sub(r'(<(img|input|hr|br|path|circle)[^>]*?)(?<!/)>', r'\1/>', html)
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    
    # Extract only the body content
    match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if match:
        body_content = match.group(1)
        # removing trailing/leading whitespaces
        return body_content.strip()
    return html.strip()

for idx, file in enumerate(html_files):
    filename = os.path.basename(file).replace('.html', '')
    # clean up component name
    comp_name = "".join([w.capitalize() for w in re.sub(r'[^a-zA-Z0-9]+', ' ', filename).split()])
    route_name = filename.lower().replace(' ', '-').replace('--', '-')
    
    with open(file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    jsx_content = html_to_jsx(html_content)
    
    # We will use React Fragment since there are multiple sibling root elements often
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
    # Quick ad-hoc replacement to use Link instead of a for BottomNav navigation
    # This is rough but gives a good starting point
    component_code = component_code.replace('<a ', '<Link ').replace('</a>', '</Link>')
    component_code = component_code.replace('href="#"', 'to="#"')
    
    with open(f'frontend/src/pages/{comp_name}.jsx', 'w', encoding='utf-8') as f:
        f.write(component_code)
    
    # setup routes for App.jsx
    app_imports.append(f"import {comp_name} from './pages/{comp_name}';")
    if filename == "rosecycle-landinghtml" or filename == "Home Dashboard":
        path = "/" if "landing" in route_name else "/home"
        app_routes.append(f"          <Route path='{path}' element={{<{comp_name} />}} />")
    else:
        app_routes.append(f"          <Route path='/{route_name}' element={{<{comp_name} />}} />")

app_jsx = f"""import React from 'react';
import {{ BrowserRouter as Router, Routes, Route }} from 'react-router-dom';
{chr(10).join(app_imports)}

function App() {{
  return (
    <Router>
      <Routes>
{chr(10).join(app_routes)}
      </Routes>
    </Router>
  );
}}

export default App;
"""

with open('frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Conversion complete.")
