import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('justoverclock/user-statistics', () => {
  extend(CommentPost.prototype, 'footerItems', function (items) {
    const user = this.attrs.post.user();
    const joinTime = user.joinTime().toString().split(' ').slice(1, 4).join(' ');
    const totalDiscussions = user.discussionCount();
    const totalPosts = user.commentCount();
    const likeReceived = user.data.attributes.likesReceived;

    items.add(
      'user-stats',
      <div className="user-stats">
        <ul>
          <li>
            <i className="far fa-clock userstats" title={app.translator.trans('justoverclock-user-statistics.forum.joinTime')} />
            {joinTime}
          </li>
          <li>
            <i className="far fa-comment-dots userstats" title={app.translator.trans('justoverclock-user-statistics.forum.totalDiscussions')} />
            {totalDiscussions}
          </li>
          <li>
            <i className="fas fa-pen-nib userstats" title={app.translator.trans('justoverclock-user-statistics.forum.totalPosts')} />
            {totalPosts}
          </li>
          <li>
            <i className="fas fa-thumbs-up userstats" title={app.translator.trans('justoverclock-user-statistics.forum.likeReceived')} />
            {likeReceived}
          </li>
        </ul>
      </div>
    );
  });
});
