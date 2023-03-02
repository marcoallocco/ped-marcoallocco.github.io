import classes from './ProdCard.module.scss';

const ProdCard = (props) => {
  return (
    <section
      className={`${classes.ProdCard} ${props.className ? props.className : ''}`}
    >
        
            <div className={classes.prodWrapper}>
                <div className={classes.thumbWrapper}>
                    <img className="img-responsive" src={props.item.imgUrl} alt={props.item.imgAlt}/>
                </div>
                <div className={classes.prodContentWrapper}>
                    <p className={classes.prodTitle}><a href={props.item.href}>{props.item.title} <span className="icon-chevron-right-bold"></span></a></p>
                    <div className='d-flex justify-content-between align-items-end mt-1 mb-1'>
                        <div>
                            <p className={classes.typoMedium}>{props.item.data}</p>
                            <p><b>{props.item.oraInizio}</b><span>{props.item.oraFine}</span></p>
                        </div>
                        <p className={classes.typoSmall}><span className="icon-clock"></span>{props.item.durata}</p>
                    </div>
                    {
                    props.item.numeroPending === undefined &&
                    <div className='d-flex justify-content-between'>
                        <div>
                            <label>Club</label>
                            <p>{props.item.club}</p>
                        </div>
                        <div>
                            <label>Sala</label>
                            <p>{props.item.sala}</p>
                        </div>
                    </div>
                    }
                    {
                    props.item.numeroPending > 0 &&
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='t-small t-orange'>{props.item.numeroPending} persone prima di te</p>
                        <button className='btn btn--border-orange'>Annulla</button>
                    </div>
                    }
                </div>
            </div>
    </section>
  );
};

export default ProdCard;