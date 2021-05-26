using System;
using System.Collections.Generic;
using System.Text;

namespace ProductEngine.Models
{
    public class ProductReview
    {
        public string UserDisplayName;
        public string Title;
        public string Description;
        public int Ratings;
        public int RatingsCount;
        public DateTime ReviewDate;
        public bool IsVerifiedUser;
        public int likes;
    }
}
