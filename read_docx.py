#!/usr/bin/env python3
import sys
import os

try:
    from docx import Document
    docx_path = sys.argv[1]
    doc = Document(docx_path)
    for para in doc.paragraphs:
        print(para.text)
except ImportError:
    print("Error: python-docx not installed")
    sys.exit(1)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
