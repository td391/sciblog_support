# CNTK flask
```
sudo apt-get install openmpi-bin
conda update conda pip
conda create --name p35 python=3.5 flask Pillow requests cherrypy
source activate p35
pip install https://cntk.ai/PythonWheel/CPU-Only/cntk-2.0rc2-cp35-cp35m-linux_x86_64.whl
pip install aiohttp paste 
wget https://www.cntk.ai/Models/Caffe_Converted/ResNet152_ImageNet.model
python cntk_api.py
```

