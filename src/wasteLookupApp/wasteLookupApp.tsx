import * as React from 'react';
import * as styles from './wasteLookupApp.scss';
import { SearchEngine } from '../searchEngine/searchEngine';
import { IItemBoxProps } from '../itemBox/ItemBox';
import { FavouritesListBoxConnected } from '../favouritesListBox/favouritesListBoxConnected';

export interface IWasteLookupAppStateProps {
    favouritedItems?: IItemBoxProps[];
}

export interface IWasteLookupAppProps extends IWasteLookupAppStateProps {}

export class WasteLookupApp extends React.Component<IWasteLookupAppProps> {
    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles.titleContainer}>
                        <div className={styles.titleContent}>
                            Toronto Waste Lookup
                        </div>
                    </div>
                </div>
                <SearchEngine />
                <FavouritesListBoxConnected />
            </div>
        );
    }
}
