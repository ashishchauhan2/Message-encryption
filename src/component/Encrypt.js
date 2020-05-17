import React from "react";
import "./Encrypt.css";
import { encrypt, decrypt } from ".";



export default class Encrypt extends React.Component {
    state = {
        encrypted:"", decrypted:""
    };

    onChange(encrypted){
        this.setState({encrypted})
    }

    async encrypt(){
        let {encrypted=""} = this.state;
        if(encrypted){
            const decrypted = await encrypt({body:encrypted});
            this.setState({decrypted})
        }
    }

    async decrypt(){
        let {encrypted=""} = this.state;
        if(encrypted){
            const decrypted = await decrypt({body:encrypted.trim()});
            this.setState({decrypted})
        }
    }

    render() {
        let {encrypted="", decrypted="" } = this.state;
        return (
            <div className="component-app">
                <div>
                    <table className="form">
                        <tr>
                            <th className="message-up"><label ><strong>Encrypt:</strong></label></th>
                            <td>
                                <textarea name="textarea-name" value={encrypted}  onChange={(event)=>this.onChange(event.target.value)} id="message" cols="30" rows="5"></textarea>
                            </td>
                        </tr>

                        <tr>
                            <th><label  className="invisible"></label></th>

                        </tr>

                        <tr>
                            <td className="submit-button-right" colspan="2">
                                <input className="submit-text" type="submit" onClick={()=>this.encrypt()} value="Encrypt" />

                                <input className="submit-text-right" type="submit" onClick={()=>this.decrypt()} value="Decrypt" />
                            </td>
                        </tr>
                        <th><label  className="invisible"></label></th>
                        <tr>
                            <th className="message-up"><label ><strong>Decrypted:</strong></label></th>
                            <td>
                                <textarea name="textarea-name" disabled value={decrypted} id="message" cols="30" rows="5"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}