import React from 'react';

export const TaskBanner = props =>(
    <h4 className="bg-primary text-white text-center p-4">
         {props.taskItems.filter(t => !t.done).length} Actividades por terminar
    </h4>
)