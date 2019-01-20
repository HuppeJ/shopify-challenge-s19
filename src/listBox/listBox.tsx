import * as React from 'react';
import * as styles from './listBox.scss';
import { IItemBoxProps } from '../itemBox/itemBox';
import { ItemBoxConnected } from '../itemBox/itemBoxConnected';

export interface IListBoxProps {
    id?: string;
    items?: IItemBoxProps[];
    noItemsMessage?: string;
    favouritesCanBeAdded?: boolean;
    favouritesCanBeRemoved?: boolean;
}

export class ListBox extends React.Component<IListBoxProps> {
    static defaultProps: Partial<IListBoxProps> = {
        id: "listBoxDefaultId",
        items: [],
        noItemsMessage: "No items.",
        favouritesCanBeAdded: false,
        favouritesCanBeRemoved: false
    };

    constructor(props: IListBoxProps) {
        super(props);
    }

    private getItems(): React.ReactNode {
        const canBeAdded: boolean = this.props.favouritesCanBeAdded;
        const canBeRemoved: boolean = this.props.favouritesCanBeRemoved;
        const items = this.props.items.map(item => (
            <ItemBoxConnected
                key={item.title}
                {...item}
                favouritesCanBeAdded={canBeAdded}
                favouritesCanBeRemoved={canBeRemoved} 
            />
        ));

        return items.length > 0 ? items : <li className={styles.noItems}>{this.props.noItemsMessage}</li>;
    }

    render() {
        return (
            <div className={styles.container}>
                <ul className={styles.list}>
                    {this.getItems()}
                </ul>
            </div>
        );
    }
}
