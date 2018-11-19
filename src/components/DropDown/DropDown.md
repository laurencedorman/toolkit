Select :

    initialState = {
      options: [
        { value: 'ocean', label: 'Ocean' },
        { value: 'mountain', label: 'Mountain' },
        { value: 'campagn', label: 'Campagn' },
      ]
    };
    
    <div style={{width: 250}}> 
        <DropDown
          placeholder="DropDown"
          name="name"
          options={state.options}
        />
    </div>

