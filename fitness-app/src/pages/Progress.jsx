import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { ProgressData, ProgressGrid } from '../data/dummy';
import { Header } from '../components';

const Progress = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Todo and progress tables" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={ProgressData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {ProgressGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Progress;
