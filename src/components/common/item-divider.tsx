import { utilsStyles } from '@/styles'
import { View } from 'react-native'

export default function ItemDivider() {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}
