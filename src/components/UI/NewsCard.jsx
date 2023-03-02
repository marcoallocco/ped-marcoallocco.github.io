import classes from './NewsCard.module.scss';

const NewsCard = (props) => {
  return (
    <section
      className={`${classes.newscard} ${props.className ? props.className : ''}`}
    >
        <a href={props.item.href}>
            <img className="img-responsive" src={props.item.imgUrl} alt={props.item.imgAlt}/>
            <div className={classes.newsContentWrapper}>
                <span className={classes.icontogo}></span>
                <p className={classes.newsTitle}>{props.item.title}</p>
                <p className={classes.newsBody}>{props.item.body}</p>
            </div>
        </a>
    </section>
  );
};

export default NewsCard;