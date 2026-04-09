import os
import glob
import re

jsx_files = glob.glob('frontend/src/pages/*.jsx')

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to strip the specific exact top nav and bottom nav
    # Since these navigations always start with <nav and end with </nav>, we can find and remove them.
    # Top Nav:
    # {/*  Top Navigation Bar  */}
    # <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
    # ... </nav>
    
    # Let's use re.sub cautiously
    content = re.sub(r'{\s*/\*\s*Top Navigation Bar\s*\*/\s*}[\s\S]*?</nav>', '', content, flags=re.IGNORECASE)
    content = re.sub(r'{\s*/\*\s*Bottom Navigation Bar\s*\*/\s*}[\s\S]*?</nav>', '', content, flags=re.IGNORECASE)

    # Some pages might just have <nav className="fixed top-0 ... </nav> without the comment
    content = re.sub(r'<nav className="fixed top-0[\s\S]*?</nav>', '', content, flags=re.IGNORECASE)
    content = re.sub(r'<nav className="fixed bottom-0[\s\S]*?</nav>', '', content, flags=re.IGNORECASE)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed duplicate navs.")
