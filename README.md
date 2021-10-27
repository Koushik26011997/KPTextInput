# KPTextInput

A simple react-native implementation of TextInput.

Features

  - Can be used as a Custom TextInput
  - Custom Styling
  - Supports Password show/hide
  - Supports Label Text as TextInput Label


![Image](https://raw.githubusercontent.com/Koushik26011997/KPTextInput/koushik/images/image.png)

### Installation
``npm i @iamkoushik/kp-textinput --save``

or

``yarn add npm i @iamkoushik/kp-textinput``

### Usage
```javascript
import KPTextInput from '@iamkoushik/kp-textinput';

const App = () => {

const [value, setValue] = useState('');

  return (
    <View>
      <KPTextInput
            style={{ height: 48, fontSize: 14, marginTop: 12 }}
            placeholder="Email Address"
            textboxvalue={value}
            type={"email-address"}
            isPassword={false}
            onChangeText={(value) => setValue(value)}
            keyboardType={"default"}
            labelplaceholder="Email Address"
          />

          <KPTextInput
            style={{ height: 48, fontSize: 14, marginTop: 12 }}
            placeholder="Email Address"
            textboxvalue={value}
            type={"email-address"}
            isPassword={false}
            onChangeText={(value) => setValue(value)}
            keyboardType={"default"}
            isShowLabel={false} // Not to show the label text
          />

          <KPTextInput
            style={{ height: 48, fontSize: 14, marginTop: 12 }}
            placeholder="Password"
            textboxvalue={value}
            type={"email-address"}
            isPassword={true} // To show the TextInput as Password field
            onChangeText={(value) => setValue(value)}
            keyboardType={"default"}
            showPassword={true}
            labelplaceholder="Password"
          />
    </View>
  )
}
```

### Contributing

If you'd like to see something added or changed to this module please open a new GitHub issue. Pull requests are always welcome.

### License

 © Koushik Paul