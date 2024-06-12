// src/components/WeeklySchedule.js
import axios from 'axios';
import React, { useState } from 'react';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const hours = ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM'];

const Horario = () => {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  const handleHourClick = async (day, hour) => {
    const appointment = {
      clientName: 'Nombre del Cliente',  // Puedes hacer esto dinámico según tu implementación
      appointmentDate: `${day} ${hour}`, 
      serviceType: 'Tipo de Servicio'  // Puedes hacer esto dinámico según tu implementación
    };
  
    try {
      const response = await axios.post('http://localhost:3000/agregarcliente', appointment);
      alert('Cita creada exitosamente');
    } catch (error) {
      alert('Error al crear la cita');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Agenda tu cita</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              
            </p>
            <br /><br />
          </div>
      <h1 className="text-2xl font-bold mb-4">Horarios</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day}>
            <button
              className="w-full px-4 py-2 bg-red-700 text-white rounded hover:bg-blue-500"
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
            {openDay === day && (
              <div className="flex flex-col mt-2 space-y-2">
                {hours.map((hour) => (
                  <button
                    key={hour}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => handleHourClick(day, hour)}
                  >
                    {hour}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horario;

