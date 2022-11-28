module.exports = {
  async find(ctx) {
    // const {slug} = ctx.params
    // const {start, ignoreCount} = ctx.request.query
    // const pageSize = await strapi.service('plugin::comment-manager.comment').getPageSize()
    // const comments = await strapi.entityService.findMany("plugin::comment-manager.comment",
    //   {
    //     filters: {related_to: {slug}},
    //     limit: pageSize,
    //     start,
    //     sort: {createdAt: "DESC"},
    //     populate: {
    //       related_to: {fields: ["slug"]},
    //       author: {fields: ["id", "username", "email"]},
    //       subcomments: {
    //         fields: ["content", "createdAt", "from_admin"],
    //         populate: {author: {fields: ["id", "username", "email"]}}
    //       }
    //     }
    //   }
    // )
    // let commentsCount
    // if (!ignoreCount) {
    //   commentsCount = await strapi.db.query("plugin::comment-manager.comment")
    //     .count(
    //       {
    //         where: {
    //           related_to: {slug}
    //         }
    //       }
    //     )
    // }
    // ctx.body = {
    //   commentsCount,
    //   comments
    // }
  }
}