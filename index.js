var http = require('http'); //http���W���[���Ăяo��
var server = http.createServer(function (request, response) {
    // ���N�G�X�g���󂯂�ƈȉ��̃��X�|���X�𑗐M����
    response.writeHead(200, {'Content-Type': 'text/plain'}); //���X�|���X�w�b�_�[�ɏ�������
    response.write('Hello World\n'); // ���X�|���X�{�f�B�ɁuHello World�v����������
    response.end(); // ���X�|���X���M����������
});
server.listen(process.env.PORT || 3000);  //3000�ԃ|�[�g�ő҂���