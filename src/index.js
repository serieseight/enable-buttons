const complete = inputs => {
  const fields = {}

  inputs.map(({ checked, name, type, value }) => {
    if (!fields[ name ]) {
      switch (type) {
        case 'checkbox':
          fields[ name ] = checked
          break
        case 'radio':
          fields[ name ] = checked
          break
        default:
          fields[ name ] = value
          break
      }
    }
  })

  return Object.keys(fields).reduce((state, k) => {
    return state && fields[ k ] !== false && fields[ k ] !== ''
  }, true)
}

const disable = button => button.setAttribute('disabled', true)

const enable = button => button.removeAttribute('disabled')

const init = ({ className = 'js-enable-buttons' } = {}) => {
  const els = [ ...document.querySelectorAll(`.${className}`) ]

  els.map(el => {
    const buttons = [ ...el.querySelectorAll('button:not([data-ignore])') ]
    const inputs = [ ...el.querySelectorAll('input[required]') ]
    const update = () => updateState({ buttons, inputs })

    inputs.map(input => {
      input.addEventListener('change', update)

      if ([ 'email', 'text' ].indexOf(input.type) !== -1) {
        let debounce

        input.addEventListener('keyup', () => {
          clearTimeout(debounce)
          debounce = setTimeout(update, 300)
        })
      }
    })

    update()
  })
}

const updateState = ({ buttons, inputs }) => {
  if (complete(inputs)) {
    return buttons.map(enable)
  }

  buttons.map(disable)
}

export default init
