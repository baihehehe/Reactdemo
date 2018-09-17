##硅谷直聘项目
       1.项目描述
            1)此项目为一个前后台分离的招聘的SPA，包括前端应用和后端应用
            2)包括用户注册/登录，大神/老板列表，实时聊天等模块
            3)前端：使用React全家桶+ES6+Webpack等技术
            4)后端：使用Node+express+mongodb+socketIO(实时通信)等技术
            5)采用模块化，组件化，工程化的模式开发

       2.技术选型
           1)前台数据展现/交互/组件化
              a.react
              b.react-router-dom
              c.redux
              d.antd-mobile
           2)后台项目
              a.node
              b.express
              c.mongodb
              d.mongoose
              e.socket.io
           3)前后台交互
              a.ajax请求
                  (1)axios
                  (2)async/await
              b.测试API接口：postman
           4)模块化
              a.ES6
              b.babel
           5)项目构建/工程化
              a.webpack
              b.react-create-app
              c.eslint
           6)其他相关库
              a.blueimp-md5
              b.js-cookie
              c.rc-queue-anim

        3.前端路由
            1)注册
               a. /register
               b. register.jsx
            2)登录
               a. /login
               b. login.jsx
            3)主界面: main.jsx
                a.老板主界面
                    (1) /laoban
                    (2) laoban.jsx
                b.大神主界面
                     (1) /dashen
                     (2) dashen.jsx
                c.消息列表界面
                      (1) /message
                      (2) message.jsx
                d.个人中心界面
                      (1) /personal
                      (2) personal.jsx
                e.老板信息完善界面
                      (1) /laobaninfo
                      (2) laoban-info.jsx
                f.大神信息完善界面
                      (1) /dasheninfo
                      (2) dashen-info.jsx
                g.聊天界面
                      (1) /chat/:userid
                      (2) chat.jsx

        4.API接口
            1.全程：前后台交互API接口
            2.重要概念：
              a.API(接口)
                接口就是下面四个的集合
              b.接口文档
                1.url
                2.请求方式
                3.请求参数
                4.返回示例
              c.测试接口
              d.对接口
              e.调接口
              f.联调
              g.前后台分离
                将一个项目分开写，前台写前台，后台写后台
              h.mock(模拟)数据
                这是前后台分离的优点，后台没有实现接口时，可以模拟数据

        5.你能从此项目中学到什么
            1.流程及开发方法
              1)熟悉一个项目的开发流程
              2)学会模块化，组件化，工程化的开发模式
              3)掌握使用create-react-app脚手架初始化react项目开发
              4)学会使用node+express+mongoose+mongodb
            2.React插件或第三方库
              1)学会使用react-router-dom开发单页应用
              2)学会使用axios与后端进行数据交互
              3)学会使用redux+react-redux+redux-thunk管理应用组件状态
              4)学会使用antd-mobile组件库构建界面
              5)学会使用mongoose操作mongodb数据库
              6)学会使用express搭建后台路由
              7)学会使用socket.io实现实时通信
              8)学会使用blueimp-md5对密码进行MD5加密处理
              9)学会使用js-cookie操作浏览器端cookie数据

    6.npm常用命令
        * npm init  //初始化当前应用包, 生成package.json
        * npm install  //根据package.json下载所有依赖包
        * npm install packageName --save   //下载某个运行时依赖包
        * npm install packageName --save-dev  //下载某个开发编译期依赖包
        * npm install packageName -g  //全局下载某个依赖包
        * npm install package@version  //下载指定版本的某个依赖包
        * npm info packageName  //查看某个包有远程仓库中的相关信息
        * npm rm packageName --save  //移除已下载的运行依赖包
        * npm rm packageName –save-dev  //移除已下载的开发依赖包
        * npm list  //查看安装的所有的包
        * npm help  //查看命令的详细帮助
        * npm install -g cnpm --registry=https://registry.npm.taobao.org  //安装淘宝镜像
        * npm config set registry="https://registry.npm.taobao.org" //将淘宝镜像设置为npm的默认仓库
        * npm run xxx //执行package.json的scripts中配置的命令
        * npm root -g //查看全局下载目录

    7.开启项目开发
        1.使用create-react-app(脚手架)搭建项目
          1)	create-react-app是react官方提供的用于搭建基于react+webpack+es6项目的脚手架
          2)	操作:
            npm install -g create-react-app : 全局下载工具
            create-react-app gzhipin-client :下载模板项目
            cd gzhipin
            npm start
            访问: localhost:3000
        2. 编码测试与打包发布项目
           1)	编码测试
             npm start
             访问: http://localhost:3000
             编码, 自动编译打包刷新(live-reload), 查看效果
           2)	打包发布
             npm run build
             npm install -g serve
             serve build
             访问: http://localhost:5000
        3.项目(前端)源码目录设计
            src(客户端代码文件夹)文件夹下创建
               1.api ajax请求相关模块文件夹
               2.assets  共用资源文件夹
               3.components  UI组件模块文件夹
               4.containers  容器组件模块文件夹
               5.redux  redux相关模块文件夹
               6.utils  工具模块文件夹
               7.index.js  入口js
        4.引入antd-mobile
          1. 下载组件库包
            npm install antd-mobile --save
          2.页面处理: index.html
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
            <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
            <script>
              if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', function() {
                  FastClick.attach(document.body);
                }, false);
              }
              if(!window.Promise) {
                document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
              }
            </script>
          3.实现组件的按需打包
            1)	下载依赖模块
              npm install --save-dev babel-plugin-import react-app-rewired
            2)	定义加载配置的js模块: config-overrides.js
              const {injectBabelPlugin} = require('react-app-rewired');
              module.exports = function override(config, env) {
              config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
              return config;
            }
            	修改配置: package.json
              "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "test": "react-app-rewired test --env=jsdom",
                "eject": "react-scripts eject"
              }
            4.在应用中使用antd组件
                import React from 'react'
                import ReactDOM from 'react-dom'
                import {Button} from 'antd-mobile'

                ReactDOM.render(
                  <Button type='primary'>学习</Button>,
                  document.getElementById('root')
                )
            5.应用中使用的组件
               1)Layout(布局)
                  a.WingBlank(两翼留白)
                  b.WhiteSpace(上下留白)
               2)Navigation(导航)
                  a.NavBar(导航栏)
                  b.TabBar(标签栏)
               3)Data Entry(数据输入)
                  a.Button(按钮)
                  b.InputItem(文本输入)
                  c.Radio(单选框)
                  d.TextareaItem(多行输入)
               4)Data Display(数据显示)
                  a.Badge(徽标数)
                  b.Icon(图标)
                  c.Grid(宫格)
                  d.List(列表)
                5)Feedback(反馈)
                  a.Modal(对话框)
                  b.Toast(轻提示)
                6)Combination(整合)
                   Result(结果页)
            6.自定义主题
                1)	目标:
                  将主体的背景颜色从blue变为green
                2)	下载依赖模块
                  npm install --save-dev less@2.7.3 less-loader

                3)	配置: config-overrides.js
                  const {injectBabelPlugin, getLoader} = require('react-app-rewired');

                  const fileLoaderMatcher = function (rule) {
                    return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
                }

                  module.exports = function override(config, env) {
                    // babel-plugin-import
                    config = injectBabelPlugin(['import', {
                      libraryName: 'antd-mobile',
                     //style: 'css',
                     style: true, // use less for customized theme
                    }], config);

                    // customize theme
                    config.module.rules[1].oneOf.unshift(
                      {
                        test: /\.less$/,
                        use: [
                         require.resolve('style-loader'),
                         require.resolve('css-loader'),
                         {
                           loader: require.resolve('postcss-loader'),
                           options: {
                              // Necessary for external CSS imports to work
                             // https://github.com/facebookincubator/create-react-app/issues/2677
                             ident: 'postcss',
                              plugins: () => [
                               require('postcss-flexbugs-fixes'),
                               autoprefixer({
                                 browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                   ],
                                  flexbox: 'no-2009',
                                }),
                              ],
                            },
                          },
                          {
                            loader: require.resolve('less-loader'),
                            options: {
                             // theme vars, also can use theme.js instead of this.
                             modifyVars: {
                               "@brand-primary": "#1cae82", // 正常
                               "@brand-primary-tap": "#1DA57A", // 按下
                              },
                            },
                          },
                        ]
                      }
                    );

                    // css-modules
                    config.module.rules[1].oneOf.unshift(
                      {
                        test: /\.css$/,
                        exclude: /node_modules|antd-mobile\.css/,
                        use: [
                          require.resolve('style-loader'),
                          {
                            loader: require.resolve('css-loader'),
                            options: {
                              modules: true,
                              importLoaders: 1,
                              localIdentName: '[local]___[hash:base64:5]'
                            },
                          },
                          {
                            loader: require.resolve('postcss-loader'),
                            options: {
                              // Necessary for external CSS imports to work
                              // https://github.com/facebookincubator/create-react-app/issues/2677
                              ident: 'postcss',
                              plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                  browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                  ],
                                  flexbox: 'no-2009',
                                }),
                              ],
                            },
                          },
                        ]
                      }
                    );

                    // file-loader exclude
                    let l = getLoader(config.module.rules, fileLoaderMatcher);
                    l.exclude.push(/\.less$/);

                    return config;
                  };
         5.引入路由
            1. 下载路由包: react-router-dom
              npm install --save react-router-dom
            2. 路由组件: containers/register/register.jsx
            /*
            用户注册的路由组件
             */
            import React, {Component} from 'react'

            export default class Register extends Component {
              render() {
                return (
                  <div>Register</div>
                )
              }
            }
            3. 路由组件: containers/login/login.jsx
              /*
              用户登陆的路由组件
               */
              import React, {Component} from 'react'

              export default class Login extends Component {
                render () {
                  return (
                    <div>login</div>
                  )
                }
              }
            4. 路由组件: containers/main/main.jsx
            /*
            应用主界面路由组件
             */
            import React, {Component} from 'react'

            export default class Main extends Component {
              render() {
                return (
                  <div>Main</div>
                )
              }
            }

            5. 映射路由: index.js
            /*
            入口JS
             */
            import React from 'react'
            import ReactDOM from 'react-dom'
            import {HashRouter, Switch, Route} from 'react-router-dom'

            import Login from './containers/login/login'
            import Register from './containers/register/register'
            import Main from './containers/main/main'

            ReactDOM.render((
              <HashRouter>
                <Switch>
                  <Route path='/login' component={Login}/>
                  <Route path='/register' component={Register}/>
                  <Route component={Main}/>
                </Switch>
              </HashRouter>
            ), document.getElementById('root'))

        6.引入redux
           1. 下载相关依赖包
           npm install --save redux@3.7.2 react-redux redux-thunk

           npm install --save-dev redux-devtools-extension
           注意: redux不能下载最新版本
           2. reducers: redux/reducers.js
           /*
           包含多个用于生成新的state的reducer函数的模块
            */
           import {combineReducers} from 'redux'

           function xxx(state = 0, action) {

             return state
           }

           function yyy(state = 0, action) {

             return state
           }

           // 返回合并后的reducer函数
           export default combineReducers({
             xxx,
             yyy
           })
          3. store: redux/store.js
          /*
          redux最核心的store对象模块
           */

          import {createStore, applyMiddleware} from 'redux'
          import thunk from 'redux-thunk'
          import {composeWithDevTools} from 'redux-devtools-extension'
          import reducers from './reducers'

          export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
          4. 入口JS: index.js
          /*
          入口JS
           */
          import React from 'react'
          import ReactDOM from 'react-dom'
          import {Provider} from 'react-redux'
          import {HashRouter, Switch, Route} from 'react-router-dom'

          import store from './redux/store'
          import Login from './containers/login/login'
          import Register from './containers/register/register'
          import Main from './containers/main/main'

          ReactDOM.render((
            <Provider store={store}>
              <HashRouter>
                <Switch>
                  <Route path='/login' component={Login}/>
                  <Route path='/register' component={Register}/>
                  <Route component={Main}/>
                </Switch>
              </HashRouter>
            </Provider>
          ), document.getElementById('root'))

        7.注册/登陆界面
           1. Logo组件
             1)	引入logo图片
             2)	components/logo/logo.jsx
             import React from 'react'
             import logo from './logo.png'
             import './logo.less'
             /*
             简单的显示logo的组件
              */
             export default class Logo extends Component {
               render () {
                 return (
                   <div className="logo-container">
                     <img src={logo} alt="logo" className='logo-img'/>
                   </div>
                 )
               }
             }

             3)	components/logo/logo.less
             .logo-container {
               text-align: center;
               margin-top: 10px;
               margin-bottom: 10px;
               .logo-img {
                 width: 240px;
                 height: 240px;
               }
             }
           2.注册组件: containers/register/register.jsx
              /*
              用户注册的路由组件
               */
              import React, {Component} from 'react'
              import {
                NavBar,
                WingBlank,
                List,
                InputItem,
                WhiteSpace,
                Radio,
                Button
              } from 'antd-mobile'

              import Logo from '../../components/logo/logo'

              export default class Register extends Component {

                state = {
                  username: '',
                  password: '',
                  password2: '',
                  type: 'dashen'
                }

                // 处理输入框/单选框变化, 收集数据到state
                handleChange = (name, value) => {
                  this.setState({[name]: value})
                }

                // 跳转到login路由
                toLogin = () => {
                  this.props.history.replace('/login')
                }

                // 注册
                register = () => {
                  console.log(JSON.stringify(this.state))
                }

                render() {
                  const {type} = this.state
                  return (
                    <div>
                      <NavBar>硅谷直聘</NavBar>
                      <Logo/>
                      <WingBlank>
                        <List>
                          <InputItem
                            placeholder='输入用户名'
                            onChange={val => this.handleChange('username', val)}
                          >
                            用户名:
                          </InputItem>
                          <WhiteSpace/>
                          <InputItem
                            type='password'
                            placeholder='输入密码'
                            onChange={val => this.handleChange('password', val)}
                          >
                            密&nbsp;&nbsp;&nbsp;码:
                          </InputItem>
                          <WhiteSpace/>
                          <InputItem
                            type='password'
                            placeholder='输入确认密码'
                            onChange={val => this.handleChange('password2', val)}
                          >
                            确认密码:
                          </InputItem>
                          <WhiteSpace/>
                          <List.Item>
                            <span style={{marginRight: 30}}>用户类型:</span>
                            <Radio checked={this.state.type==='dashen'}
                                   onClick={() => {this.handleChange('type', 'dashen')}}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={this.state.type==='laoban'}
                                   onClick={() => {this.handleChange('type', 'laoban')}}>老板</Radio>
                          </List.Item>
                          <WhiteSpace/>
                          <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                          <WhiteSpace/>
                          <Button onClick={this.toLogin}>已经有账号</Button>
                        </List>
                      </WingBlank>
                    </div>
                  )
                }
              }
            3.登陆组件: containers/login/login.jsx
                /*
                用户登陆的路由组件
                 */

                import React, {Component} from 'react'
                import {
                  NavBar,
                  WingBlank,
                  List,
                  InputItem,
                  WhiteSpace,
                  Button
                } from 'antd-mobile'

                import Logo from '../../components/logo/logo'

                export default class Login extends Component {
                  state = {
                    username: '',
                    password: '',
                  }

                  // 处理输入框/单选框变化, 收集数据到state
                  handleChange = (name, value) => {
                    this.setState({[name]: value})
                  }

                  // 跳转到注册路由
                  toRegister = () => {
                    this.props.history.replace('/register')
                  }

                  // 注册
                  login = () => {
                    console.log(this.state)
                  }

                  render() {
                    return (
                      <div>
                        <NavBar>硅谷直聘</NavBar>
                        <Logo/>
                        <WingBlank>
                          <List>
                            <InputItem
                              placeholder='输入用户名'
                              onChange={val => this.handleChange('username', val)}
                            >
                              用户名:
                            </InputItem>
                            <WhiteSpace/>
                            <InputItem
                              type='password'
                              placeholder='输入密码'
                              onChange={val => this.handleChange('password', val)}
                            >
                              密&nbsp;&nbsp;&nbsp;码:
                            </InputItem>
                            <WhiteSpace/>
                            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                            <WhiteSpace/>
                            <Button onClick={this.toRegister}>还没有账号</Button>
                          </List>
                        </WingBlank>
                      </div>
                    )
                  }
                }
