export function apiVersion(version: string) { 
  return (target: any) => { 
    Object.assign(target.prototype, { __version: version });
  } 
}

export function minLength(length: number) { 
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => { 
      if(value.length < length) { 
        throw new Error(`Expect ${key} to have length ${length} but received ${value.length}`)
      }

      _value = value;
    }

    Object.defineProperty(target, key, { 
      get: getter,
      set: setter,
      configurable: true 
    })
  } 
}

export function maxLength(length: number) { 
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => { 
      if(value.length > length) { 
        throw new Error(`Expect ${key} to have length ${length} but received ${value.length}`)
      }

      _value = value;
    }

    Object.defineProperty(target, key, { 
      get: getter,
      set: setter,
      configurable: true 
    })
  } 
}
