import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'

const NoteScreen = () => {
    const [input, setInput] = React.useState("");
    const [notes, setNotes] = React.useState([]);

    const addNote = () => {
        setNotes(notes => [...notes, input]);
        setInput("");
    }

    const renderItem = ({ item }) => (
        <View style={styles.bubble}>
            <Text style={{color: "#FFF"}}>{ item }</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                contentContainerStyle={styles.list} 
                data={notes}
                extraData={notes}
                renderItem={renderItem}
            />
            <View 
                style={styles.inputArea}
            >
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    onSubmitEditing={addNote}
                    value={input}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={addNote}
                >
                <Text style={{fontSize: 18, color: "#FFF"}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 10
    },
    inputArea: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        flex: 1,
        backgroundColor: "#DDDDDD"
    },
    addButton: {
        height: 40,
        width: 40,
        marginVertical: 12,
        marginRight: 12,
        borderRadius: 20,
        flex: 0,
        backgroundColor: "#0074D9",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    bubble: {
        borderRadius: 20,
        margin: 5,
        padding: 10,
        backgroundColor: "#0074D9"
    }
})
