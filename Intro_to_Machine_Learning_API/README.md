# CNTK flask
```
sudo apt-get install openmpi-bin python3-pip python3-venv
python3 -m venv ./venv
source venv/bin/activate
pip install -I pip
pip install https://cntk.ai/PythonWheel/CPU-Only/cntk-2.0rc2-cp35-cp35m-linux_x86_64.whl
pip install flask Pillow requests paste cherrypy
wget https://www.cntk.ai/Models/Caffe_Converted/ResNet152_ImageNet.model
```

