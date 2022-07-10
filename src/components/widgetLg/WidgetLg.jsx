import "./WidgetLg.css";

export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgtr">
                <th className="widgetLgTh"> Customer</th>
                <th className="widgetLgTh"> Date</th>
                <th className="widgetLgTh"> Amount</th>
                <th className="widgetLgTh"> Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetName">Kartik Yadav</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$169.00</td>
                <td className="widgetLgStatus"><Button type ="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetName">Kartik Yadav</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$169.00</td>
                <td className="widgetLgStatus"><Button type ="Declined"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetName">Kartik Yadav</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$169.00</td>
                <td className="widgetLgStatus"><Button type ="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetName">Kartik Yadav</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$169.00</td>
                <td className="widgetLgStatus"><Button type ="Approved"/></td>
            </tr>
        </table>
    </div>
  );
}
