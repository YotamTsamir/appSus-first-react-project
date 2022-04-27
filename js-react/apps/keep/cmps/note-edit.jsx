export class NoteEdit extends React.Component {
    state = {
        note: {
            isSelected: false,
            isPinned: false,
            info: {
                txt: '',
                url: '',
                title: '',
                label: '',
                todos: {
                    txt: '',
                },
            },

        }
    }
}