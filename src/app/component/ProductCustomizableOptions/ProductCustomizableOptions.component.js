/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductCustomizableOption from 'Component/ProductCustomizableOption';

import './ProductCustomizableOptions.style';

class ProductCustomizableOptions extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        options: PropTypes.array,
        setSelectedDropdownValue: PropTypes.func.isRequired,
        setSelectedCheckboxValues: PropTypes.func.isRequired,
        setCustomizableOptionTextFieldValue: PropTypes.func.isRequired
    };

    static defaultProps = {
        options: []
    };

    renderContent() {
        const {
            options,
            setSelectedCheckboxValues,
            setCustomizableOptionTextFieldValue,
            setSelectedDropdownValue
        } = this.props;

        return options.map((option, key) => (
            <ProductCustomizableOption
              option={ option }
              /* eslint-disable-next-line react/no-array-index-key */
              key={ key }
              setSelectedCheckboxValues={ setSelectedCheckboxValues }
              setCustomizableOptionTextFieldValue={ setCustomizableOptionTextFieldValue }
              setSelectedDropdownValue={ setSelectedDropdownValue }
            />
        ));
    }

    renderPlaceholder() {
        const { isLoading } = this.props;

        return (
            <div
              block="ProductCustomizableOptions"
              mods={ { isLoading, isPlaceholder: true } }
            />
        );
    }

    render() {
        const { isLoading } = this.props;

        if (isLoading) {
            return this.renderPlaceholder();
        }

        return this.renderContent();
    }
}

export default ProductCustomizableOptions;
