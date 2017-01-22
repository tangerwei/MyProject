npm 发布包
1>编写模块
bin用于存放二进制文件的目录
lib用于存放javascript代码的目录
doc用于存放文档的目录
test用于存放单元测试用例的目录
2>初始化package.json包描述文件
3>注册包仓库帐号//第一次注册，后面直接使用即可
npm adduser
4>上传包
npm publish
5>命令行移动到合适的目录，安装上传的包即可

npm更新包
1>修改发布版本号
2>npm publish即可(如果不行就先npm adduser)

-->注意我在上传包之后安装的过程中犯了一个错误，在这个my_module目录底下安装这个hello_test_tangerwei这个包，npm会自动抛出错误 Refusing to install hello_test_tangerwei as a dependency of itself
意思是：拒绝在将hello_test_tangerwei安装在他本身的目录下，因为my_module就是hello_test_tangerwei

注意下，我在hello_test_tangerwei使用的是foxmail邮箱