* [深入浅出React和Redux]
* 在使用JSX的范围内必须要有React.因为JSX最终ui被转译成依赖于React的表达式。
* UI = render(data)
* Virtual Dom
* 高内聚低耦合 用户界面无外乎内容、交互行为和样式。
# state props
* state是组件的内部状态,prop是组件的对外接口。
* 当prop的类型不是字符串类型时,在JSX中必须用花括号{}把prop值包住。
* 函数类型的prop等于让父类组件交给了子组件一个回调函数，子类组件在恰当的实际调用函数类型的prop,可以带上必要的参数,这样就可以反过来把信息传递给外部世界。
* 一定要记得在构造函数的第一行通过super调用父类也就是React.Component的构造函数。
* 在构造函数中可以通过参数props获得传入prop值,在其他函数中可以通过this.props访问传入的prop的值。
* propTypes检查  babel-react-optimize 在生产环境出掉 propsTypes检查。
* defaultProps
# 组件的生命周期
* render 函数应该是一个纯函数,完全根据 state和props来决定结果。
* render函数被调用完之后,componentDidMount函数并不是会被立刻调用,componentDidMount被调用的时候,render函数返回的东西已经引发了渲染,组件已经被装载到DOM书上。
# 更新过程
* componentWillReceiveProps(nextProps)
*  只要是父组件的render函数被调用,在render函数里面被渲染的子组件就会经历更新过程。
*  forceUpdate函数强行引发一次重新绘制。
*  shouldComponentUpdate(nextProps,nextState)
*  决定了一个组件什么时候不需要渲染,返回 布尔值。
# Flux
1. Dispatcher 处理动作分发,维持Store之间的依赖关系
2. Store 负责存储数据和处理数据相关逻辑
3. Action 驱动Dispatcher的javaScript对象
4. View 视图部分,负责显示用户界面
# Redux   
1. 唯一数据源
2. 保持状态只读
3. 数据改变只能通过纯函数完成。

* 一个React组件基本上就是完成以下功能:
1. 读取store中数据初始化 state 并监听state的变化更新视图
2. 根据当前的props和state 渲染出用户界面

```
getOwnState(){   store.getState()获取 store上存储的所有状态
    return {
        value:store.getState()[this.props.caption]
    }
}
onChange(){
    this.setState(this.getOwnState())
}

componentDidMount(){
    store.subscribe(this.onChange)
}

componentWillUnmount(){
    store.unsubscribe(this;onChange)
}

// 在组件componentDidMount函数中,我们通过Store的subscribe监听其变化,只要Store状态发生变化,就会调用这个组件的onChange方法。在组件的 componentDidMount中的动作对应。
```

* 容器组价 负责和Redux Store打交道的组件
* 展示组件 负责渲染界面的组件 根据props来渲染结果不需要 state
* 所谓Context 就是 '上下文环境' 让一个树状组件上所有组件都能访问一个共同的对象,为了完成这个任务,需要上级和下级组件配合。
1. 首先,上级组件要宣称自己支持context,并且提供了一个函数来返回代表Context的对象。
2. 然后,这个上级组件之下的所有子孙组件,只要宣称自己需要这个context,就可以了,通过this.context访问到这个共同的环境对象。
## Provider 
* 我们可以创建一个特殊的React组件,它将是一个通用的context提供者,可以应用在任何一个应用中,我们把这个叫做 Provider 当做全局的 context
  
```
import React,{Component} from 'react'

class Provider extends Component {
    getChildContext(){  // 返回的就是 Context对象
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children
    }
}
Provider.childContentTypes = {
    store:PropTypes.object
}

// 子组件需设置  
constructor(){
    super(...arguments)
}
ConterContainer.contextTypes = {  在子组件中   this.context.store.getState()[this.prop.caption]
    store.PropTypes.object
}
```

* 对于Redux,因为Redux的Store封装的很好,没有提供直接修改状态的功能。
## React应用的两个方法
1. 第一是把一个组件拆分为容器组件和傻瓜组件
2. 是用React的Context来提供一个所有组件都可以直接访问的Context。
3. react-redux 就是把它们抽离出来复用的。
# react-redux
1. connect:连接容器组件和傻瓜组件
* 把Store上的状态转化为内层傻瓜组件的prop
* 把内层傻瓜组件中的用户动作转化为派送给Store的动作。
* mapStateToProps mapDispatchToProps  
* mapStateToProps 把Store上的状态转化为内层组件的props,其实就是一个映射关系
* 把内层傻瓜组件暴露出来的函数类型的prop关联上dispatch函数调用。每个prop代表的回调函数的主要区别就是dispatch函数的参数不同,这个就是mapDispatchToProps函数做的事情。
```
import {connect} from 'react-redux'
export default connect(a,b)(Counter)

function a(b,c){
    return
}
```
1. Provider:提供包含store的context
* subscribe
* dispatch
* getState
* react-redux 定义了Provider的componentWillReceiveProps函数在每次重新渲染时都会调用到。