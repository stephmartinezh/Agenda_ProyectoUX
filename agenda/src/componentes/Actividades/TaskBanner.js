import React from 'react';

export const TaskBanner = props =>(
    <h4 className="bg-light text-black text-center p-4">
         {props.taskItems.filter(t => !t.done).length} actividades por terminar
    </h4>
)