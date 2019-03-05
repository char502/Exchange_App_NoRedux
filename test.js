class SelectFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFriendsIds: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { checked, value } = e.target;
    let { selectedFriendsIds } = this.state;
    if (checked) {
      selectedFriendsIds = [...selectedFriendsIds, value];
    } else {
      selectedFriendsIds = selectedFriendsIds.filter((el) => el !== value);
    }
    this.setState({ selectedFriendsIds }, () => console.log(this.state));
  }

  render() {
    const { friends } = this.props;

    return (
      <div>
        <h2>Add Friends</h2>
        {friends.map(({ friendId, frn }) => {
          return (
            <div key={friendId}>
              <input
                value={friendId}
                type="checkbox"
                onChange={this.handleChange}
              />
              {frn}
            </div>
          );
        })}
      </div>
    );
  }
}

const friends = [
  { friendId: 1, frn: "Bob" },
  { friendId: 2, frn: "Davros" },
  { friendId: 3, frn: "Daisy" }
];

ReactDOM.render(
  <SelectFriends friends={friends} />,
  document.getElementById("container")
);
