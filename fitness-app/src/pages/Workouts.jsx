import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Search, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems, exercisesData, exercisesTable, exercisesDataImages, exercisesTableImages } from '../data/dummy';
import { Header } from '../components';
import './Workouts.css';

const Workouts = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Search'];
  
  /*
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Workouts" />
      <GridComponent
        id="gridcomp"
        dataSource={WorkoutsData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */ //} 
      /*    {workoutsTable.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  ); 
};*/
return (
  <div style={{margin: '8%', marginTop:'2%',  backgroundColor: 'rgb(3, 201, 215);'}}>
    <Header category="Page" title="Workouts" />
    <GridComponent
      id="gridcomp"
      dataSource={exercisesData.exercises}
      allowFiltering
      //dataSource={exercisesDataImages}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      editSettings={editing}
      toolbar={toolbarOptions}
    >
      <ColumnsDirective>
        {exercisesTable.map((col, index) => (
          <ColumnDirective key={index} {...col} />
        ))}
      </ColumnsDirective>
      <Inject services={[Resize, Search, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    </GridComponent>
  </div>
);
};
export default Workouts;
