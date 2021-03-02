import { useEffect, useState } from "react"

const useHook = () => {
  let year, month, months, day, hours, minutes, seconds, now
  now = new Date()
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  year = now.getFullYear()
  month = months[now.getMonth()]
  day = now.getDay()
  hours = now.getHours()
  minutes = now.getMinutes()
  seconds = now.getSeconds()

  return { year, month, day, hours, minutes, seconds }
}

export default useHook