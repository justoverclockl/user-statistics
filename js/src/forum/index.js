import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('justoverclock/user-statistics', () => {
  extend(CommentPost.prototype, 'headerItems', function (items) {
    const post = this.attrs.post;
    const user = this.attrs.post.user();
    if (user) {
      const likeReceived = user.data.attributes.likesReceived;

      if (post.isHidden()) return;

      if (likeReceived >= 10 && likeReceived <= 49) {
        items.add('topLikeReceived', <div className="Badge-like ten">10+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>);
      }

      if (likeReceived >= 50 && likeReceived <= 99) {
        items.add(
          'topLikeReceived',
          <div className="Badge-like fifthy">50+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>
        );
      }

      if (likeReceived >= 100 && likeReceived <= 199) {
        items.add(
          'topLikeReceived',
          <div className="Badge-like hundred">100+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>
        );
      }

      if (likeReceived >= 200 && likeReceived <= 299) {
        items.add(
          'topLikeReceived',
          <div className="Badge-like twohundred">200+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>
        );
      }

      if (likeReceived >= 300 && likeReceived <= 499) {
        items.add(
          'topLikeReceived',
          <div className="Badge-like threehundred">300+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>
        );
      }

      if (likeReceived >= 500) {
        items.add(
          'topLikeReceived',
          <div className="Badge-like fivehundred">500+ {app.translator.trans('justoverclock-user-statistics.forum.likes')}</div>
        );
      }
    }
  });
  extend(CommentPost.prototype, 'view', function (vnode) {
    const post = this.attrs.post;
    const user = this.attrs.post.user();
    if (user) {
      const joinTime = user.joinTime().toString().split(' ').slice(1, 4).join(' ');
      const totalDiscussions = user.discussionCount();
      const totalPosts = user.commentCount();
      const likeReceived = user.data.attributes.likesReceived;
      const totalBestAnswer = user.data.attributes.bestAnswerCount

      if (post.isHidden()) return;

      vnode.children.push(
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
            <li>
              <i className="fas fa-check-circle userstats" title={app.translator.trans('justoverclock-user-statistics.forum.totalBestAnswer')} />
              {totalBestAnswer}
            </li>
          </ul>
        </div>
      );
    }
  });
});
