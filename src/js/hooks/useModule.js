import {useEffect, useState} from 'react'
import axios from 'axios'

export const useModule = url => {
  const [module, setModule] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(data => setModule(data.data))
      .catch(err => console.error(err));
  }, []);

  return module;
}