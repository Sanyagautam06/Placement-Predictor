import os
import sys

# Get absolute path of the directory containing index.py (api/)
# and add its parent directory (the project root) to sys.path
root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

from app import app
