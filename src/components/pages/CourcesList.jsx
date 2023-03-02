import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from 'rsuite';
import { getCources } from '../features/cources/courcesSlice'
import Card from "../UI/Card"
import classes from './CourcesList.module.scss';

const CourcesList = (props) => {
  const dispatch = useDispatch()
  
  const cources = useSelector((state) => state.cources)

  const { courceItems, status, error } = cources

  useEffect(() => {
    let isMounted = true

    if (status === 'idle') {
      dispatch(getCources())
    }
    
    return () => {
      isMounted = false
    }
  }, [status, dispatch])

  let bodyContent
  let dateTranslated
  let switchContent

  if (status === 'loading') {
    bodyContent = <div className="loader"><Loader content="Loading..." /></div>
  } else if (status === 'successful') {
    //console.log(props.filterPlaceSelected)
    //console.log(props.filterCategorySelected)
    //console.log(props.filterActivitySelected)
    
    let sortedCources = [];
    sortedCources = courceItems;
    if (props.filterPlaceSelected != "all" && props.filterPlaceSelected != null ) {
      sortedCources = sortedCources.filter(corso => corso.club === props.filterPlaceSelected);
    } 
    if (props.filterCategorySelected != "all" && props.filterCategorySelected != null ) {
      sortedCources = sortedCources.filter(corso => corso.category === props.filterCategorySelected);
    } 
    if (props.filterActivitySelected != "all" && props.filterActivitySelected != null ) {
      sortedCources = sortedCources.filter(corso => corso.title === props.filterActivitySelected);
    } 
    if (props.filterDateSelected != null ) {
      dateTranslated = new Date(props.filterDateSelected).toLocaleDateString('it-IT')      
      sortedCources = sortedCources.filter(corso => corso.data === dateTranslated);
    }

    bodyContent = sortedCources.map((cource) => (
        <Card key={Math.random()} className={classes.courceCard}>
          <div className={classes.courceCardWrapper} category={cource.category}>
            <div className={classes.thumb}>
              <img src={cource.urlThumb} alt="Cource thumb"/>
            </div>
            <h3>{cource.title}</h3>
            <div className={classes.smFlexRow}>
              <p><span className="icon-clock"></span>{cource.durata}</p>
              <div className={classes.orari}>
                <p>{cource.oraInizio}</p>
                <p>{cource.oraFine}</p>
              </div>
            </div>
            {(() => {
            switch (cource.status) {
              case 'iscritto':
                return <><p className={classes.statusDescr}>Sei iscritto</p><button className='btn btn--border-orange'>Annulla</button></>
              case 'iscrivibile':
                return <><div className={classes.statusDescr}><p><b><span className="t-orange mr-0">18</span>/30</b></p><p>Posti disponibili</p></div><button className='btn btn--green'>Iscriviti</button></>
              case 'libero':
                return <><p className={classes.statusDescr}>Attività libera</p><div className="fake-btn"></div></>
              case 'pending':
                return <><div className={classes.statusDescr}><p><b>{cource.numeroPendings}</b></p><p>Persone in atesa</p></div><button className='btn btn--border-blue'>Metti in attesa</button></>
              case 'chiuso':
                return <><div className={classes.statusDescr}><p><b>12 ore</b></p><p>All'apertura dell'iscrizione</p></div><button className='btn btn--gray' disabled>Iscriviti</button></>
              default:
                return null
            }
          })()}
          </div>
        </Card>
    ))
  } else {
    bodyContent = <div>{error}</div>
  }

  return <div>{bodyContent}</div>
}

export default CourcesList
