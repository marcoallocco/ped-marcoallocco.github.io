import { SelectPicker, Panel } from 'rsuite';
import classes from './FiltersBar.module.scss';

const FiltersBar = (props) => {

  const dataPlace = [{
    code: 'all',
    name: 'Tutte le palestre'
  },
  {
    code: 'club1',
    name: 'Club Ravizza'
  },{
    code: 'club2',
    name: 'Club 2'
  },{
    code: 'club3',
    name: 'Club 3'
  },{
    code: 'club4',
    name: 'Club 4'
  }]

  const dataCategory = [{
    code: 'all',
    name: 'Tutte le categorie'
  },
  {
    code: 'cat1',
    name: 'Yoga'
  },{
    code: 'cat2',
    name: 'Attività in acqua'
  },{
    code: 'cat3',
    name: 'Cardiovascolari e tonificazione'
  },{
    code: 'cat4',
    name: 'Danza'
  }]

  const dataActivity = [{
    code: 'all',
    name: 'Tutte le attività'
  },
  {
    code: 'Hatha Yoga',
    name: 'Hatha Yoga'
  },{
    code: 'PANCAFIT',
    name: 'PANCAFIT'
  },{
    code: 'BODYPUMP',
    name: 'BODYPUMP'
  },{
    code: 'Yoga',
    name: 'Yoga'
  },{
    code: 'LES MILLS GRIT',
    name: 'LES MILLS GRIT'
  },{
    code: 'PLAY ACQUA',
    name: 'PLAY ACQUA'
  },{
    code: 'GYM',
    name: 'GYM'
  }]

  return (
    <Panel header="Filters" collapsible >
    
    <div className={classes.filtersBar}>
        <div className={classes.selectPlace}>
          <SelectPicker className={classes.select} data={dataPlace}
              searchable={false}
              valueKey="code"
              labelKey="name"
              style={{ width: 224 }}
              defaultValue={dataPlace[0].code} 
              onChange={(value, event)=>{
                props.handlePlaceChange(value)
              }}
            />
        </div>
        
        <div className={classes.selectCategory}>
          <SelectPicker className={classes.select} data={dataCategory}
            searchable={false}
            valueKey="code"
            labelKey="name"
            style={{ width: 224 }}
            defaultValue={dataCategory[0].code} 
            onChange={(value, event)=>{
              props.handleCategoryChange(value)
            }}
          />
        </div>

        <div className={classes.selectActivity}>
        <SelectPicker className={classes.select} data={dataActivity}
            searchable={false}
            valueKey="code"
            labelKey="name"
            style={{ width: 224 }}
            defaultValue={dataActivity[0].code} 
            onChange={(value, event)=>{
              props.handleActivityChange(value)
            }}
          />
        </div>
    </div>
    </Panel>
  );
};

export default FiltersBar;





