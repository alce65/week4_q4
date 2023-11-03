```
<Context>
    <App>
        <Info></Info>
        <Display></Display>
        <Actions>
            <Action label={}></Action>
            <Action label={}></Action>
        </Actions>
        <Keyboard>
            <Key></Key> * 11
        </Keyboard>
        </App>;
</Context>
```

Info:

- Renderiza el estado de la llamada: (Callinng... / ... )
- Recibe el <b>estado de la llamada</b> desde el contexto 

Display:

- Renderiza el número de teléfono
- Recibe el <b>número de teléfono</b> desde el contexto 

Actions:

- Renderiza 2 <Action>
    - Pasandoles por props su etiqueta

Action

- Renderiza un botón con un texto que recibe por props
- Cuando el usuario hace click se ejecuta la funcion del contexto
    que cambia el <b>estado de la llamada</b>
- Recibe por props el texto a mostrar
- Recibe del contexto la funcion que cambia el <b>estado de la llamada</b>

Keyboard

- Renderiza 11 <Key>
    - Pasandoles por props su etiqueta

Key
- Renderiza un botón con un texto que recibe por props
- Cuando el usuario hace click se ejecuta ejecuta la funcion del contexto
    que cambia el <b>número de teléfono</b>
- Recibe por props el texto a mostrar
- Recibe del contexto la funcion que cambia el <b>número de teléfono</b>

Contexto
- Define el/los estado/s
    - estado de la llamada
    - número de teléfono
- Define las funciones que manejan el estado
    - setter de el estado de la llamada
    - setter de el número de teléfono




- ¿Qué renderiza?
- ¿Qúe interacciones del usuario tiene?
- ¿Qué información recibe y desde donde?
