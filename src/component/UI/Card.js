import "./Card.css";

function Card(props) {
    //children 这个告诉react, 这个里面包含的是所有标签中包含的东西
    //不好理解是因为 e.g. expenseitem里有一个标签是expensedate，这个expensedate里面是自己的东西
    //而这个card，只是一个shell, 他自己什么都没有，反过来包的是expenseitem的东西
    const classes = 'card ' + props.className;
    //这个props.className提取的是用<Card></Card>这个标签的className
    return <div className={classes}>{props.children}</div>;
}

export default Card;