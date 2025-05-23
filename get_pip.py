# get-pip.py official bootstrap
import urllib.request, os, tempfile, runpy
url = "https://bootstrap.pypa.io/get-pip.py"
with urllib.request.urlopen(url) as resp:
    script = resp.read()
with tempfile.NamedTemporaryFile(delete=False, suffix=".py") as f:
    f.write(script)
    tempname = f.name
runpy.run_path(tempname, run_name="__main__")
os.unlink(tempname)
