import os
import sys

# Get the absolute path of the root directory and insert it into system paths
root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

# Import the main Flask 'app' instance from app.py at the root
from app import app