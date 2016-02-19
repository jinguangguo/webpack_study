/**
 * @file
 * @author jinguangguo
 * @date 2016/2/18
 */

let React = require('react');

const TEXTS = [
    {
        id: 1,
        txt: '文本1'
    },
    {
        id: 2,
        txt: '文本2'
    }
];

export class Test extends React.Component {
    render() {
        let items = [];

        TEXTS.map(function (text, index) {
            items.push(
                <li className="item" key={text.id}>
                    <a href="javascript:;" title={text.txt} className="item-link">
                        {text.txt}
                    </a>
                </li>
            );
        });

        return <ul className="widget-show-text">{items}</ul>;
    }
}