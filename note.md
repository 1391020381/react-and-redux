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