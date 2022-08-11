import {IRout} from './routConstants'
import {Route} from 'react-router-dom'
import * as React from "react";

export function routGenerator (routArr:  Array<IRout>): Array<React.ReactElement> {
  return routArr.map(({ path, component, id}: IRout) => {
      return (
        <Route
          key={id}
          path={path}
          element={component( { children: React.Component })}
        />
    )
  })
}