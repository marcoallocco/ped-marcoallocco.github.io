import classes from './BannerFullWidth.module.scss';

const BannerFullWidth = (props) => {
  return (
    <section
      className={`${classes.banner} ${props.item.class ? props.item.class : ''}`}
    >
      <a href={props.item.href}>
        <img className="img-responsive" src={props.item.imgUrl} alt={props.item.imgAlt}/>
      </a>
    </section>
  );
};

export default BannerFullWidth;