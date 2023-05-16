function getClockAngle(hh_mm) {
    hh_mm = hh_mm.split(":")
    let hr = parseInt(hh_mm[0])
        mn = parseInt(hh_mm[1])
        degrees1 = 0
        degrees2 = 0
    if (hr > 12) {
      hr = hr - 12
    }
    degrees1 = (30*hr) - (5.5*mn)
    degrees2 = 360 - degrees1 
    let angle = Math.min(degrees1,degrees2)
    if (angle < 0) {
      angle = angle * -1
    }
    return angle
  }
  