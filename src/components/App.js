import Profile from "./Profile/Profile";
import user from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import data from "../data/data.json";
import FriendList from "./Friends/FriendList";
import friends from "../data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
