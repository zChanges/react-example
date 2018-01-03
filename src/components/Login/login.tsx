/** Import React */
import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
const FormItem = Form.Item;
import './login.less';
/** Stylesheet Imports */
interface LoginProps extends FormComponentProps {
  userName: number;
  password: string;
}

interface State {}

class Login extends React.Component<LoginProps> {
  public state: State;
  constructor(public props: LoginProps) {
    super(props);
    this.state = {};
  }

  // tslint:disable-next-line:no-any
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>React Admin</span>
          </div>
          <Form onSubmit={this.handleSubmit} >
            <FormItem>
              {getFieldDecorator('userName', { rules: [ { required: true, message: 'Please input your username!' } ] })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [ { required: true, message: 'Please input your Password!' } ]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
