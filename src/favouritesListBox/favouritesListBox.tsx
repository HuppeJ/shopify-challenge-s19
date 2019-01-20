import * as React from 'react';
import * as styles from './favouritesListBox.scss';
import { IItemBoxProps } from '../itemBox/itemBox';
import { ListBox } from '../listBox/listBox';

export interface IFavouritesListBoxStateProps {
    favouritedItems?: IItemBoxProps[];
}

export interface IFavouritesListBoxState {
    items?: IItemBoxProps[];
}

export interface IFavouritesListBoxProps extends IFavouritesListBoxStateProps { };

export class FavouritesListBox extends React.Component<IFavouritesListBoxProps, IFavouritesListBoxState> {
    public static readonly ID = "FAVOURITES_LIST_BOX_ID";

    constructor(props: IFavouritesListBoxProps) {
        super(props);
        this.state = { items: [] };
    }

    componentWillReceiveProps(newProps: IFavouritesListBoxProps) {
        this.setState({ items: newProps.favouritedItems });
    }

    render() {
        return (
            <div>
                <div className={styles.title}>
                    Favourites
                </div>
                <ListBox
                    id={FavouritesListBox.ID}
                    items={this.state.items}
                    noItemsMessage={"No favourites added yet."}
                    favouritesCanBeRemoved
                />
            </div>
        );
    }
}
