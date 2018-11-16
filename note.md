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